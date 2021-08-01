import React, { useState, useEffect } from "react";
import "./style.css";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";

function Userlist() {
  const [userInfo, setUserInfo] = useState([]);
  const [paging, setPaging] = useState(1);

  useEffect(() => {
    const userData = async () => {
      try {
        let URL = `https://reqres.in/api/users?page=${paging}`;
        const res = await fetch(URL);
        const urlData = await res.json();
        setUserInfo(urlData.data);
      } catch (err) {
        console.log(err);
      }
    };

    userData();
  }, [paging]);

  // Paging functions
  const previousData = () => {
    setPaging(paging - 1);
  };

  const nextData = () => {
    setPaging(paging + 1);
  };

  return (
    <>
      <div className="outer">
        {userInfo.map((elemt, index) => {
          return (
            <div className="main" key={index}>
              {userInfo && paging <= 2 ? (
                <div className="main" key={index}>
                  <div className="main-div">
                    <div className="card">
                      <Card
                        style={{
                          width: "9rem",
                          height: "13rem",
                          border: "1px solid black",
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={elemt.avatar}
                          style={{ width: "8.9rem", height: "5rem" }}
                        />
                        <Card.Body>
                          <Card.Title style={{ fontSize: "13px" }}>
                            {elemt.email}
                          </Card.Title>
                          <Card.Text>
                            {elemt.first_name} {elemt.last_name}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <p>no data found</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="paging">
        <Pagination>
          <Pagination.Prev
            onClick={previousData}
            className={paging === 1 ? "disabled" : "none"}
          />
          <Pagination.Item>{paging}</Pagination.Item>
          <Pagination.Next onClick={nextData} />
        </Pagination>
      </div>
    </>
  );
}

export default Userlist;
