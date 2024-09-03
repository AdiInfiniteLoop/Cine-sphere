import Link from "next/link";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <Link
      href={address}
      className="flex items-center hover:text-yellow-500 transition-colors"
    >
      <Icon className="text-2xl sm:text-xl mr-1" />
      <span className="hidden sm:inline capitalize">{title}</span>
    </Link>
  );
};

export default MenuItem;
