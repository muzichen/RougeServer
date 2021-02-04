import { Connection, createConnection } from "typeorm";

const connection = async (): Promise<Connection> => {
  return new Promise(async (resolve, reject) => {
    try {
      const ct = await createConnection()
      if (ct) {
        resolve(ct)
      }
    } catch(e) {
      reject(e)
    }
  })
}

export default connection



