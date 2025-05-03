"use client";

import { useState, useRef, useEffect } from "react";
import { useForm, Controller, set } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

// Step 1 Schema (Strict types for Step 1)
const step1Schema = z.object({
  email: z
    .string()
    .email("Invalid email")
    .refine((val) => val.endsWith("@nsec.ac.in"), {
      message: "Must be a valid NSEC email",
    }),
  password: z.string().min(6, "Password must be at least 6 characters"),
  secretCode: z.string().min(6, "Secret Code must be at least 6 characters"),
});

// Step 2 Schema (Strict types for Step 2)
const otpSchema = z.object({
  otp: z.array(z.string().length(1)).length(6),
});

type Step1FormData = z.infer<typeof step1Schema>;
type Step2FormData = z.infer<typeof otpSchema>;

export default function SignUpPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [resendTimer, setResendTimer] = useState<number>(60);
  const [usermail, setUsermail] = useState<string>("");

  // Updated otpRefs type: RefObject can be null or the input element
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const router = useRouter();

  // Step 1 Form Hook
  const {
    register: registerStep1,
    handleSubmit: handleSubmitStep1,
    formState: { errors: errorsStep1, isSubmitting: isSubmittingStep1 },
    setValue: setValueStep1,
    getValues: getValuesStep1,
  } = useForm<Step1FormData>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      email: "",
      password: "",
      secretCode: "",
    },
    mode: "onChange",
  });

  // Step 2 Form Hook
  const {
    control: controlStep2,
    handleSubmit: handleSubmitStep2,
    formState: { errors: errorsStep2, isSubmitting: isSubmittingStep2 },
    setValue: setValueStep2,
    getValues: getValuesStep2,
  } = useForm<Step2FormData>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: Array(6).fill("") },
    mode: "onChange",
  });

  const onSubmitStep1 = async (data: Step1FormData) => {
    console.log("Step 1 Data:", data);
    try {
      const response = await axios.post("/api/auth/admin/login", {
        email: data.email,
        password: data.password,
        secretCode: data.secretCode,
      });
      if (response.status === 200) {
        setUsermail(data.email); // Store email for OTP verification
        toast.success(response.data.message || "Will recieve OTP soon!");
        setStep(2); // Move to Step 2 if successful
      } else {
        toast.error(response.data.message || "Some internal error");
      }
    } catch (error) {
      console.log(error);
      toast.error("Some internal error");
    }

    setResendTimer(60); // reset timer
  };

  const onSubmitStep2 = async (data: Step2FormData) => {
    console.log("Step 2 OTP:", data.otp.join(""));
    try {
      const response = await axios.post("/api/auth/signup/verify-otp", {
        email: usermail,
        otp: data.otp.join(""),
      });
      if (response.status === 200) {
        toast.success(response.data.message || "Welcome Admin!");
        // Proceed to Step 3 if OTP is verified
        setTimeout(() => {
          router.push("/admin-panel");
        }, 1500);
      } else {
        toast.error(response.data.message || "Invalid OTP");
      }
    } catch (error) {
      console.log(error);
      toast.error("Some internal error");
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    const otpArray = [...(getValuesStep2("otp") ?? Array(6).fill(""))];
    otpArray[index] = value;
    setValueStep2(
      "otp",
      otpArray as [string, string, string, string, string, string]
    );

    // Auto move to next input
    if (value.length === 1 && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  // Resend Timer Effect
  useEffect(() => {
    if (step === 2 && resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [step, resendTimer]);

  const handleResendOtp = () => {
    if (resendTimer === 0) {
      toast.success("New OTP sent to your email!");
      setResendTimer(60);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4 w-[600px] mx-auto">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">
              {step === 1 ? "Login as Admin" : "Verify OTP"}
            </h1>

            <form
              onSubmit={
                step === 1
                  ? handleSubmitStep1(onSubmitStep1)
                  : handleSubmitStep2(onSubmitStep2)
              }
              className="space-y-6"
            >
              {/* Step 1 */}
              {step === 1 && (
                <>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Admin Email
                    </label>
                    <input
                      {...registerStep1("email")}
                      className="w-full rounded-lg border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                      placeholder="admin@nsec.ac.in"
                    />
                    {errorsStep1.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errorsStep1.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      {...registerStep1("password")}
                      type="password"
                      className="w-full rounded-lg border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                      placeholder="Create a password"
                    />
                    {errorsStep1.password && (
                      <p className="mt-1 text-sm text-red-500">
                        {errorsStep1.password.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Secret Code
                    </label>
                    <input
                      {...registerStep1("secretCode")}
                      type="password"
                      className="w-full rounded-lg border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                      placeholder="Confirm your password"
                    />
                    {errorsStep1.secretCode && (
                      <p className="mt-1 text-sm text-red-500">
                        {errorsStep1.secretCode.message}
                      </p>
                    )}
                  </div>
                </>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <>
                  <div className="flex justify-center space-x-2">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <Controller
                        key={index}
                        name={`otp.${index}` as const}
                        control={controlStep2}
                        render={({ field }) => (
                          <input
                            {...field}
                            ref={(el) => {
                              otpRefs.current[index] = el;
                            }}
                            maxLength={1}
                            onChange={(e) =>
                              handleOtpChange(index, e.target.value)
                            }
                            className="w-10 h-10 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
                            type="text"
                          />
                        )}
                      />
                    ))}
                  </div>
                  {errorsStep2.otp && (
                    <p className="mt-1 text-sm text-red-500">
                      Please enter a valid OTP
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={resendTimer > 0}
                    className="mt-4 text-sm text-blue-600"
                  >
                    {resendTimer === 0
                      ? "Resend OTP"
                      : `Resend in ${resendTimer}s`}
                  </button>
                </>
              )}

              <button
                type="submit"
                className="w-full py-2 mt-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                disabled={step === 1 ? isSubmittingStep1 : isSubmittingStep2}
              >
                {step === 1 ? "Next" : step === 2 ? "Verify OTP" : "Finish"}
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                Login as a User?{" "}
                <a
                  href="/login"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  User Login
                </a>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
