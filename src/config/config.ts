// require("dotenv").config();
export const config = {
  dev: {
    username: "udagramonosgbdev",
    password: "udagramonosgbdev",
    database: "udagramonosgbdev",
    host: "udagramonosgbdev.cwiqfnlww4pb.us-east-1.rds.amazonaws.com",
    dialect: "postgres",
    aws_region: "us-east-1",
    aws_profile: "default",
    aws_media_bucket: "udagram-onosgb-dev",
  },
  jwt: {
    secret: "OPmhNVprkyysSgmBOi6YhSfo",
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
