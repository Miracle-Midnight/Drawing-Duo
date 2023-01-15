import { useCallback } from "react";

export function Logout() {
  const handleLogout = useCallback(() => {
    sessionStorage.removeItem("userid");
    sessionStorage.removeItem("userToken");
    sessionStorage.removeItem("userNickname");
    sessionStorage.removeItem("userProfileImage");
    document.location.href = "/";
  }, []);

  return (
    <button
      type="submit"
      className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
      role="menuitem"
      onClick={handleLogout}
    >
      <span className="flex flex-col">
        <span>Logout</span>
      </span>
    </button>
  );
}
