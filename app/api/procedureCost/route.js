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
