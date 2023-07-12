import axios from "axios";
import fs from "node:fs/promises";

const JSON_DB_BASE_URL = "http://localhost:5001";
const JSON_DB_LOCATION = "./src/jsonDB/db.json";
const USER_TABLE = "ph-systems-users";
const NAMESPACE_TABLE = "ph-namespaces";

export const addNamespaceTableToDB = async (username: string): Promise<void> => {
  try {
    const jsonData = await fs.readFile(JSON_DB_LOCATION, "utf-8");
    const parsedData = JSON.parse(jsonData);
    parsedData[`${NAMESPACE_TABLE}_${username}-default-namespace`] = [];
    console.log(parsedData);
    const updatedJsonData = JSON.stringify(parsedData, null, 2);
    await fs.writeFile(JSON_DB_LOCATION, updatedJsonData);
  } catch (err) {
    console.log(err);
  }
};

export const addUser = async (user: any): Promise<any> => {
  const { data } = await axios.post(`${JSON_DB_BASE_URL}/${USER_TABLE}`, { ...user });
  return data;
};

export const getAllUsersWithUsername = async (username: string): Promise<any> => {
  const { data } = await axios.get(`${JSON_DB_BASE_URL}/${USER_TABLE}?username=${username}`);
  return data;
};

export const getAllUsersWithEmail = async (email: string): Promise<any> => {
  const { data } = await axios.get(`${JSON_DB_BASE_URL}/${USER_TABLE}?email=${email}`);
  return data;
};
