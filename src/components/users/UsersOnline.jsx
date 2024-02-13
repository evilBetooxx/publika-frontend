import { useEffect, useState } from "react";
import { getUsersOnlineRequest } from "../../api/users";
import UserCard from "../card/UserCard";

function UsersOnline() {
  const [usersOnline, setUsersOnline] = useState([]);

  useEffect(() => {
    const fetchUsersOnline = async () => {
      const response = await getUsersOnlineRequest();
      console.log(response.data);
      setUsersOnline(response.data);
    };
    fetchUsersOnline();
    const intervalId = setInterval(fetchUsersOnline, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
        <div className="flex-1 px-2 sm:px-0">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-extralight text-black">
              Usuarios en línea
            </h3>
            <div className="inline-flex items-center space-x-2"></div>
          </div>
          {usersOnline.map((user) => (
            <UserCard key={user._id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UsersOnline;
