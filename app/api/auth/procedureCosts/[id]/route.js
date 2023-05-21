import ProcedureCost from '../../../../../models/procedureCost';
import { connectToDB } from '../../../../../utils/database';

export const GET = async (req, { params }) => {
	try {
		await connectToDB();

		console.log(params);

		const procedureCosts = await ProcedureCost.find({
			creator: params.id
		}).populate('creator');

		console.log(procedureCosts);

		return new Response(JSON.stringify(procedureCosts), {
			status: 200
		});
	} catch (error) {
		// return new Response('Failed to fetch all ProcedureCosts', {
		// 	status: 500
		// });
		console.log(error);
	}
};
