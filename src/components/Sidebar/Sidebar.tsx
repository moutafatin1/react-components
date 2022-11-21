import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, ReactNode, useState } from "react";
import {
  AiFillDollarCircle,
  AiFillHome,
  AiFillPieChart,
  AiFillSetting,
} from "react-icons/ai";
import { twMerge } from "tailwind-merge";
import TransitionOpacity from "../shared/animations/TransitionOpacity";

export function Sidebar() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button onClick={openModal} className="ml-64">
        Open/Close
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 flex"
          onClose={closeModal}
        >
          <TransitionOpacity>
            <div className="fixed inset-0  bg-gray-600 bg-opacity-70"></div>
          </TransitionOpacity>
          <TransitionOpacity>
            <Dialog.Panel
              as="aside"
              className="relative flex w-full max-w-xs flex-1 flex-col  bg-gray-800 pt-5"
            >
              {/* Logo */}
              <div className="px-4">
                <h1 className="text-3xl font-bold text-white">Expense App</h1>
              </div>

              {/* Nav */}
              <div className="mt-5 h-0 flex-1 overflow-y-auto">
                <nav className="mt-5 flex flex-col space-y-2 px-2">
                  <Sidebar.NavItem icon={<AiFillHome />} isActive={true}>
                    Home
                  </Sidebar.NavItem>
                  <Sidebar.NavItem icon={<AiFillDollarCircle />}>
                    Expenses
                  </Sidebar.NavItem>
                  <Sidebar.NavItem icon={<AiFillSetting />}>
                    Settings
                  </Sidebar.NavItem>
                  <Sidebar.NavItem icon={<AiFillPieChart />}>
                    Charts
                  </Sidebar.NavItem>
                </nav>
              </div>
              <Sidebar.Footer />
            </Dialog.Panel>
          </TransitionOpacity>
        </Dialog>
      </Transition>
    </>
  );
}

type NavItemProps = {
  children: React.ReactNode;
  icon?: ReactNode;
  isActive?: boolean;
};

Sidebar.NavItem = ({ children, icon, isActive = false }: NavItemProps) => {
  return (
    <a
      href="#"
      className={twMerge(
        clsx(
          "group flex items-center  rounded-md p-2 font-medium text-gray-300",
          isActive && "bg-gray-900 text-white",
          !isActive && "transition-colors hover:bg-gray-700 hover:text-gray-100"
        )
      )}
    >
      <span className={clsx(isActive && "text-gray-300", "mr-4 text-xl")}>
        {icon}
      </span>
      <span>{children}</span>
    </a>
  );
};

Sidebar.Footer = () => {
  return (
    <div className="flex items-center gap-2 bg-gray-700 p-4">
      <img
        className="h-14 w-14 rounded-full"
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="avatar"
      />
      <div className="flex flex-col">
        <span className="font-medium text-white">Oussama Moutafatin</span>
        <span className="text-gray-300">View Profile</span>
      </div>
    </div>
  );
};
