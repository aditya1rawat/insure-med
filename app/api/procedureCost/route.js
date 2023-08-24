import { mongo } from 'mongoose';
import ProcedureCost from '../../../models/procedureCost';
import { connectToDB } from '../../../utils/database';

export const POST = async req => {
	const { userId, serviceProvider, procedure, cost } = await req.json();

	console.log('UserID', userId);
	console.log('serviceProvider', serviceProvider);
	console.log('procedure', procedure);
	console.log('cost', cost);

	try {
		await connectToDB();

		const newProcedureCost = new ProcedureCost({
			creator: userId,
			serviceProvider: serviceProvider,
			procedure: procedure,
			cost: cost
		});

		await newProcedureCost.save();

		return new Response(JSON.stringify(newProcedureCost), {
			status: 201
		});
	} catch (error) {
		console.log(error);
		return new Response('Failed to create a new response', {
			status: 500
		});
	}
};

export const DELETE = async req => {
	console.log(req.json)
	const { _id } = await req.json();

	console.log('Procedure ID: ', _id);
	try {
		await connectToDB();

		await db.collection('procedurecosts').deleteOne({ _id: new mongo.ObjectId(_id) });
		await db.collection('inventory').deleteOne({ status: 'D' });


		return new Response(_id + " Deleted", {
			status: 201
		});
	} catch (error) {
		console.log(error);
		return new Response('Failed to delete', {
			status: 500
		});
	}
};
