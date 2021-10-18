import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import ApiConfig from "../Config/ApiConfig";
import { BodyComp } from "./BodyComp";
export interface ISerachProps {
  title?: string;
  placeholder?: string;
  type?: string;
  className?: string;
}

export default function Serach(props: ISerachProps) {
  const [data, setData] = useState<any>(undefined);
  const [querydata, setQuerydata] = useState(undefined);
  const Click = (e: BaseSyntheticEvent) => {
    console.log(e.target.value === "");

    setTimeout(() => {
      if (e.target.value === "") {
        setQuerydata(undefined);
        setData(undefined);
      } else {
        setQuerydata(e.target.value);
      }
    }, 1000);
  };
  useEffect(() => {
    (async () => {
      const URL = `${ApiConfig.API_URL}?i=${ApiConfig.API_ID}&apikey=${ApiConfig.API_KEY}&t=${querydata}`;
      if (querydata !== undefined) {
        let resp = await fetch(URL);
        resp = await resp.json();
        // console.log(resp);
        setData(resp);
      }
    })();
  }, [props, querydata]);

  console.log(data);

  if (data === undefined || data["Response"] === "False") {
    return (
      <div>
        <input
          type={props.type}
          className={props.className}
          placeholder={props.placeholder}
          onKeyUp={(e) => Click(e)}
        />
        <h4>Loading......</h4>
      </div>
    );
  } else {
    return (
      <div>
        <input
          type={props.type}
          className={props.className}
          placeholder={props.placeholder}
          onChange={(e) => Click(e)}
        />
        <BodyComp
          awards={data["Awards"]}
          imdbRating={data["imdbRating"]}
          genere={data["Genre"]}
          actors={data["Actors"]}
          director={data["Director"]}
          title={data["Title"]}
          image={data["Poster"]}
          type={data["Type"].toUpperCase()}
          ploat={data["Plot"]}
          country={data["Country"]}
          lang={data["Language"]}
          released={data["Released"]}
          boxoffice={data["BoxOffice"]}
        />
      </div>
    );
  }
}
