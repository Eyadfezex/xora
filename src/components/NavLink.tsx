import { Link as LinkScroll } from "react-scroll";
const NavLink = ({ title }: { title: string }) => {
  return (
    <LinkScroll
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
      to="someTarget"
    >
      {title}
    </LinkScroll>
  );
};

export default NavLink;
