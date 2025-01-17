import { Element } from "react-scroll";
import { links, logos } from "../../constants";
import lines from "../../../public/lines.svg";
import xora from "../../../public/xora.svg";
import screen from "../../../public/screen.jpg";
import Marker from "../ui/Marker";
const Download = () => {
  return (
    <section className="relative">
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24  max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
              <div className="mb-10">
                <img src={xora} alt="xora" width={160} height={55} />
              </div>
              <p className="body-1 mb-10 max-w-md">
                Try now for free on IOS, Android, PC, Web - Whatever your
                flavor, we've got you covered
              </p>
              <ul className="flex flex-wrap items-center gap-6">
                {links.map(({ id, icon, url }) => (
                  <li
                    key={id}
                    className="download_tech-link download_tech-link_last_before download_tech-link_last_after"
                  >
                    <a
                      href={url}
                      className="size-22 download_tech-icon-before relative flex items-center justify-center rounded-full border-2  border-s3 bg-s1 transition-borderColor duration-500"
                    >
                      <span className="absolute -top-2 rotate-90 ">
                        <Marker />
                      </span>
                      <img
                        src={lines}
                        alt="lines"
                        className=" absolute size-13/20"
                      />
                      <span className="download_tech-icon">{icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-10 max-md:hidden">
              <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />
                  <img
                    src={screen}
                    width={855}
                    height={655}
                    alt="demo"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <ul className="mt-24 flex gap-20  justify-center max-lg:hidden">
            {logos.map(({ id, title, url, width, height }) => (
              <li key={id}>
                <img src={url} width={width} height={height} alt={title} />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};

export default Download;
