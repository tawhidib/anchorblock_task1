import Layout from "@/components/layout";
import React from "react";

const Users = (): JSX.Element => {
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
                <th scope="col" className="w-[10%] px-6 py-3 text-left">
                  #ID
                </th>
                <th scope="col" className="w-[40%] px-6 py-3 text-left">
                  USER
                </th>
                <th scope="col" className="w-[40%] px-6 py-3 text-left">
                  EMAIL
                </th>
                <th scope="col" className="w-[10%] px-6 py-3 text-right">
                  OPTION
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="bg-white">
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4 text-right">$2999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

Users.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default Users;
