import React from "react";

const Blogs = () => {
  return (
    <div
      className=" container rounded-3  text-center"
      style={{ backgroundColor: "rgba(36, 36, 36, 0.95)" }}
    >
      <div className="d-lg-flex m-4 justify-content-between p-4">
        <img
          className="img-fluid w-50  rounded-3"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--ds3sVMSF--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3hpi7hcrgvkpsv7vp8ni.png"
          alt=""
        />
        <div className="text-white ms-4 me-4">
          <h1 className="text-center text-warning">
            When to use nodejs and when to use mongodb?
          </h1>

          <article className="mb-3">
            A programming environment and a runtime library that can compile
            and/or understand your code as well as provide basic programming
            tools and assistance are required for each project. Nodejs is a
            programming language that uses Javascript. Python, Java, PHP, C#,
            C++, Go, and more languages all provide similar tools.
            <br></br>
          </article>

          <article>
            <br />A database will almost likely be required if your program
            requires the ability to preserve data so that it can be effectively
            searched or changed later. Numerous well-known databases are
            available. MongoDB is one such database. MariaDB, MySql, CouchDB,
            DynamoDB (on AWS), and Postgres are some of the other databases
            available.
          </article>
        </div>
      </div>

      <div className="d-lg-flex m-4 justify-content-between p-4 ">
        <div className=" ms-4 me-4">
          <h1 className="text-center text-warning">
            Differences between sql and nosql databases.
          </h1>
          <div className="text-white">
            <article className="mb-3">
              Inserting, searching, updating, and deleting database records can
              all be done with SQL programming. That isn't to say SQL isn't
              capable of more.It supports table based data type.SQL supports
              databases like MySQL, SQL Server, Oracle, etc.SQL is simple and
              easy to learn with declarative commands.
            </article>
            <article>
              NoSQL is a non-relational database management system that does not
              require a set schema, does not require joins, and is simple to
              grow. For dispersed data repositories with large data storage
              requirements, a NoSQL database is employed.NoSQL flexibility is
              its biggest advantage. Programmers are not limited to storing only
              structured data. The freedom from the predefined schema allows
              NoSQL databases to store and retrieve data easily.
            </article>
          </div>
        </div>

        <img
          className="img-fluid w-50 rounded-3"
          src="https://i.morioh.com/2019/11/15/2c93a29a4161.jpg"
          alt=""
        />
      </div>
      <div className="d-lg-flex justify-content-between m-4 p-4 ">
        <img
          className="img-fluid w-50 rounded-3"
          src="https://www.valuecoders.com/blog/wp-content/uploads/2021/03/Node.JS-VS-JavaScript-1-930x620.jpg"
          alt=""
        />
        <div className="text-warning ms-4">
          <h1 className="text-center text-warning">
            Difference between javascript and nodejs.
          </h1>
          <article className="text-white">
            <br></br>
            NodeJS is a cross-platform, open-source Javascript runtime
            environment that enables server-side javascript execution.
            Javascript code can now execute outside of the browser thanks to
            Nodejs. Nodejs has a large number of modules and is primarily used
            in web development.
          </article>
          <article className="mt-3 text-white">
            Javascript is a scripting language. JS is the most common
            abbreviation. Javascript might be considered an updated version of
            the ECMA script. Javascript is a high-level programming language
            that is built on prototype inheritance and employs the Oops concept.
          </article>
        </div>
      </div>
      <div className="d-lg-flex justify-content-between m-4 p-4 ">
        <div className=" ms-4">
          <h1 className="text-center text-warning">
            What is the purpose of jwt and how does it work?
          </h1>
          <article className="text-white">
            <br></br>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims.
            <br></br>
            It works like this: the server generates and delivers a token to the
            client that verifies the user's identity. For each future request,
            the client will transmit the token back to the server, letting the
            server know that the request is coming from a specific identity.
          </article>
        </div>
        <img
          className="img-fluid w-50 rounded-3 ms-3"
          src="https://miro.medium.com/max/1400/1*AMeiWwTqbLAUe0bvdVTVLA.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Blogs;
