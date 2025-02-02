import React, { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import API from "../../utils/API";
import Link from "next/link";
import Image from "next/image";

const InfoWindow = ({ adId }) => {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    API.get(`/ads/mini-info/${adId}`).then((resp) => {
      setInfo(resp.data);
    });
  }, []);

  return (
    <div>
      {!info ? (
        <Loader active size="medium" />
      ) : (
        <div className="wrap-info-window-data">
          {info.photo && (
            <span>
              <Image
                width={200}
                height={200}
                className="info-window-mini-img"
                src={info.photo}
                alt="photo"
              />
            </span>
          )}
          <div className="wrap-text-info-window">
            <h5 className="title-ad-iw">{info.title}</h5>
            <div className="address-ad-iw">{info.address}</div>
            <div className="subinfo-wrap-iw">
              <div className="category-ad-iw">{info.categoryName}</div>
              <Link href={`/ad?adId=${adId}`}>Show more ></Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoWindow;
