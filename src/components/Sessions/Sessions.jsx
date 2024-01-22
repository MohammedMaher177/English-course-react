import axios from "axios";
import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import styles from "./sessions.module.css";
import PPTX from "../Icons/PPTX.jsx";
import Loading from "../Loading/Loading.jsx";
import PDFIcon from "../Icons/PDFIcon.jsx";

export default function Sessions() {
  const [loading, setLoading] = useState(true);
  const [allSessions, setAllSessions] = useState([]);

  const getAllSessions = async () => {
    const sessions = await axios
      .get("https://english-course-nest.onrender.com/session")
      .then(({ data }) => data)
      .catch(({ response }) => response);
    setAllSessions(sessions);
    setLoading(false);
  };

  useEffect(() => {
    getAllSessions();
  }, []);
  return (
    <div className={`container`} id="courses">
      {loading ? (
        <Loading />
      ) : (
        <Accordion defaultActiveKey="0">
          {allSessions?.map((se, i) => (
            <Accordion.Item eventKey={`${i}`} key={i} className="mb-2">
              <Accordion.Header>
                <span className="fs-2 text-success">
                  Session: Sunday {new Date(se.date).getDay()}{" "}
                  {new Date(se.date).getDate()}/
                  {new Date(se.date).getMonth() + 1}
                  {"/"}
                  {new Date(se.date).getFullYear()}
                </span>
              </Accordion.Header>
              <Accordion.Body>
                {se.images?.map((img, i) => (
                  <img src={img} alt="" key={i} />
                ))}
                {se.videos?.map((v, i) => (
                  <video controls key={i} className={`${styles.video} mb-3`}>
                    <source src={v} type="video/mp4" />
                  </video>
                ))}
                {se.docs.map((d, i) => (
                  <div key={i}>
                    <a
                      href={d}
                      target="_blank"
                      className="d-flex align-items-center text-decoration-none text-success mb-3"
                      rel="noreferrer"
                    >
                      <PPTX />{" "}
                      <span className="fs-6">
                        Download {d.substring(d.lastIndexOf("/") + 1)}!!
                      </span>
                    </a>
                  </div>
                ))}
                {se.PDFs.map((d, i) => (
                  <div key={i} className="d-flex w-100">
                    <PDFIcon />
                    <div className="mx-2 d-flex align-items-center">
                      <a target="_blank" href={d} className={styles.link}>
                      {d.substring(d.lastIndexOf("/") + 1)}
                      </a>
                    </div>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </div>
  );
}
