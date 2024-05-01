import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import data2 from "../../../../data2";
import Info from "./Info/Info";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Sidebar.css";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [file, setFile] = useState();
  const [offset, setOffset] = useState();

  return (
    <div className="sidebar">
      <div className="title">
        <div>
          <h4>
            <MdKeyboardArrowLeft /> مشاهده همه{" "}
          </h4>
          <h3>ویژه</h3>
        </div>
      </div>
      <div className="moviebar">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={6}
          breakpoints={{
            1200: {
              slidesPerView: 6,
            },
            1039: {
              slidesPerView: 5,
              spaceBetween: 8,
            },
            850: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            680: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            450: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
          navigation
          dir="rtl"
        >
          {data2.map((map) => {
            return (
              <SwiperSlide key={data2.lastIndexOf(map)}>
                <Card
                  offset={offset}
                  key={data2.lastIndexOf(map)}
                  id={data2.lastIndexOf(map)}
                  name={map.name}
                  type={map.type}
                  file={map.file}
                  isActive={isActive}
                  setIsActive={setIsActive}
                  change={(id, name, type, file) => {
                    setId(id);
                    setName(name);
                    setType(type);
                    setFile(file);
                  }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Info
        name={name}
        type={type}
        file={file}
        change={(top) => setOffset(top)}
        isActive={isActive}
        id={id}
      />
    </div>
  );
};
export default Sidebar;
