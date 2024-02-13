function UserCard({ user }) {
  return (
    <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="relative group bg-blue-500 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center rounded-md hover:bg-blue-700 hover:smooth-hover">
        <img
          className="w-20 h-20 object-cover object-center rounded-full"
          src={user.photo}
          alt="cuisine"
        />
        <h4 className="text-white text-2xl font-bold capitalize text-center">
          {user.username}
        </h4>
        <p className="text-white/50">{user.posts.length}</p>
        <p className="absolute top-2 text-black inline-flex items-center text-xs">
          Online{" "}
          <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span>
        </p>
      </div>
    </div>
  );
}

export default UserCard;
