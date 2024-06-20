import { MongoClient } from "mongodb";
let connection;

export const MongoConnect = async () => {
	connection = await MongoClient.connect(process.env.MONGODB_URL, {
		"connectTimeoutMS": 5000
	});
};

export const MongoConnection = async () => {
	if (!connection) await MongoConnect();

	return connection;
};

export const MongoClose = () => connection.close();