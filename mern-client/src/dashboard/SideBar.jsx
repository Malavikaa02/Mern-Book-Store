import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiCloudUpload,
  HiInbox,
  HiShoppingBag,
  HiSupport,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import userImg from "../assets/profile.jpg";

const SideBar = () => {
  return (
    <Sidebar aria-label="Styled Sidebar">
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-100 text-gray-800">
        <div className="flex items-center hover:bg-gray-200 py-4 px-4 mt-4">
          <img src={userImg} alt="Flowbite logo" className="h-8 w-8" />
          <span className="ml-2 text-lg font-medium">Flowbite</span>
        </div>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="flex items-center hover:bg-gray-200 py-2 px-4">
              <span className="ml-2">Dashboard</span>
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/upload" icon={HiCloudUpload} className="flex items-center hover:bg-gray-200 py-2 px-4">
              <span className="ml-2">Upload Books</span>
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} className="flex items-center hover:bg-gray-200 py-2 px-4">
              <span className="ml-2">Manage Books</span>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser} className="flex items-center hover:bg-gray-200 py-2 px-4">
              <span className="ml-2">Users</span>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag} className="flex items-center hover:bg-gray-200 py-2 px-4">
              <span className="ml-2">Products</span>
            </Sidebar.Item>
            <Sidebar.Item href="/login" icon={HiArrowSmRight} className="flex items-center hover:bg-gray-200 py-2 px-4">
              <span className="ml-2">Sign In</span>
            </Sidebar.Item>
            <Sidebar.Item href="logout" icon={HiTable} className="flex items-center hover:bg-gray-200 py-2 px-4">
              <span className="ml-2">Log Out</span>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie} className="flex items-center hover:bg-gray-200 py-2 px-4">
              <span className="ml-2">Upgrade to Pro</span>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards} className="flex items-center hover:bg-gray-200 py-2 px-4">
              <span className="ml-2">Documentation</span>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiSupport} className="flex items-center hover:bg-gray-200 py-2 px-4">
              <span className="ml-2">Help</span>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </div>
    </Sidebar>
  );
};

export default SideBar;

