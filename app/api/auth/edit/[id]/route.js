import User from '../../../../../models/user';
import { connectToDB } from '../../../../../utils/database';

// PATCH (update)
export const PATCH = async request => {
	const { _id, serviceProvider, policyNumber } = await request.json();
	try {
		await connectToDB();

		const currentUserInfo = await User.findById({
			_id
		});

		if (!currentUserInfo) {
			return new Response('User not found', { status: 404 });
		}
		console.log(
			`serviceProvider:${serviceProvider},  policyNumber:${policyNumber}`
		);
		currentUserInfo.serviceProvider = serviceProvider;
		currentUserInfo.policyNumber = policyNumber;

		await currentUserInfo.save();
		console.log('Updated currentUserInfo to MongoDB');
		return new Response(JSON.stringify(currentUserInfo), { status: 200 });
	} catch (error) {
		console.log('Printing error');
		console.log(error);
	}
};

// DELETE (delete)
export const DELETE = async (request, { params }) => {
	try {
		await connectToDB();

		await Prompt.findByIdAndRemove(params.id);

		return new Response('Prompt deleted successfully', { status: 200 });
	} catch (error) {
		return new Response('Failed to delete prompt', { status: 500 });
	}
};
