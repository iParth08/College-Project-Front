import React from "react";
const SinglePost = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-8">
      {/* Main Blog Section */}
      <div className="w-full md:w-2/3">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Main Heading of the Blog</h1>
          <hr className="border-t-2 border-gray-200 mb-4" />
          <p className="text-gray-700">
            Blog content goes here. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nullam non urna nec leo pretium porta at sit amet
            nunc.
          </p>
        </div>
      </div>

      {/* Side Section */}
      <div className="w-full md:w-1/3">
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">About the Author</h3>
          <p className="text-gray-700 mb-4">
            Information about the author. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam non urna nec leo pretium porta
            at sit amet nunc.
          </p>
          <h4 className="text-lg font-bold mb-2">Author Profile</h4>
          <p className="text-gray-700 mb-4">Author profile details here.</p>
          <h4 className="text-lg font-bold mb-2">Comment by Author</h4>
          <p className="text-gray-700">Author's comment on the blog.</p>
        </div>

        {/* Similar Posts Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Similar Posts</h2>
          {/* Add similar posts component or list here */}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
