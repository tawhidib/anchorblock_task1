import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import api from "@/lib/api";
import more from "../assets/images/icons/more.png";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Users = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api
      .get(`/users`, {
        params: {
          page: page,
        },
      })
      .then(({ data }) => {
        setUsers(data.data);
      });
  }, [page]);

  return (
    <>
      <header>
        <h4 className="text-[#323B4B] text-[23px] font-semibold">Users List</h4>
      </header>

      {/* user table  */}

      <main>
        <div className="relative overflow-x-auto mt-6">
          <table className="w-full text-sm text-left text-[#4E5D78]">
            <thead className="text-xs uppercase bg-[#FAFBFC] rounded-3xl min-w-full">
              <tr className="rounded-full min-w-full">
                <th scope="col" className="w-[10%] px-6 py-3">
                  #ID
                </th>
                <th scope="col" className="w-[40%] px-6 py-3">
                  USER
                </th>
                <th scope="col" className="w-[40%] px-6 py-3">
                  EMAIL
                </th>
                <th scope="col" className="w-[10%] px-6 py-3">
                  OPTION
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {users.map((user) => (
                <tr key={user.email} className="bg-white">
                  <td className="px-6 py-4">{user.id}</td>
                  <td className="px-6 py-4 flex items-center">
                    <div className="mr-4">
                      <img
                        className="w-[60px] h-[60px] rounded-[15px]"
                        src={user.avatar}
                        width={60}
                        height={60}
                        loading="lazy"
                      />
                    </div>
                    <div>{user.first_name + " " + user.last_name}</div>
                  </td>
                  <td className="px-6 py-4">{user?.email}</td>
                  <td className="px-6 py-4 flex items-center">
                    <img src={more.src} height={24} width={24} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* pagination  */}
        <div className="flex">
          <button
            className="w-[32px] h-[32px] bg-white hover:bg-[#2F80ED] border-[#F1F1F1] border rounded-xl text-[#333333] text-[13px] font-semibold ml-2"
            onClick={() => setPage(1)}
          >
            {"<<"}
          </button>
          <button className="w-[32px] h-[32px] bg-white hover:bg-[#2F80ED] border-[#F1F1F1] border rounded-xl text-[#333333] text-[13px] font-semibold ml-2">
            {"<"}
          </button>
          <button
            className="w-[32px] h-[32px] bg-[#2F80ED]  border-[#F1F1F1] border rounded-xl text-white text-[13px] font-semibold ml-2"
            disabled
          >
            {page}
          </button>
          <button
            className="w-[32px] h-[32px] bg-white hover:bg-[#2F80ED] border-[#F1F1F1] border rounded-xl text-[#333333] text-[13px] font-semibold ml-2"
            onClick={() => setPage((pre) => pre + 1)}
          >
            {page + 1}
          </button>
          <button
            className="w-[32px] h-[32px] bg-white hover:bg-[#2F80ED] border-[#F1F1F1] border rounded-xl text-[#333333] text-[13px] font-semibold ml-2"
            onClick={() => setPage((pre) => pre + 2)}
          >
            {page + 2}
          </button>
          <button
            className="w-[32px] h-[32px] bg-white hover:bg-[#2F80ED] border-[#F1F1F1] border rounded-xl text-[#333333] text-[13px] font-semibold ml-2"
            disabled
          >
            {"..."}
          </button>
          <button
            className="w-[32px] h-[32px] bg-white hover:bg-[#2F80ED] border-[#F1F1F1] border rounded-xl text-[#333333] text-[13px] font-semibold ml-2"
            onClick={() => setPage((pre) => pre + 9)}
          >
            {page + 9}
          </button>
          <button
            className="w-[32px] h-[32px] bg-white hover:bg-[#2F80ED] border-[#F1F1F1] border rounded-xl text-[#333333] text-[13px] font-semibold ml-2"
            onClick={() => setPage((pre) => pre + 1)}
          >
            {">"}
          </button>
          <button
            className="w-[32px] h-[32px] bg-white hover:bg-[#2F80ED] border-[#F1F1F1] border rounded-xl text-[#333333] text-[13px] font-semibold ml-2"
            onClick={() => setPage((pre) => pre + 10)}
          >
            {">>"}
          </button>
        </div>
      </main>
    </>
  );
};

Users.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default Users;
