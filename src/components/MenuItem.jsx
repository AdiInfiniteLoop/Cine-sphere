import Link from "next/link";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <Link
      href={address}
      className="flex items-center hover:text-orange-600 transition-colors"
    >
      <Icon className="text-3xl sm:text-lg mr-1" />
      <span className="hidden sm:inline capitalize">{title}</span>
    </Link>
  );
};

export default MenuItem;
