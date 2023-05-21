import User from '../../../../models/user';
import { connectToDB } from '../../../../utils/database';

export const GET = async (request, { params }) => {
	try {
		await connectToDB();
		const _id = params.id;

		const userInfo = await User.findById({ _id });

		if (!userInfo)
			return new Response('User Info not found', { status: 404 });

		return new Response(JSON.stringify(userInfo), {
			status: 200
		});
	} catch (error) {
		return new Response('Failed to fetch the prompt', {
			status: 500
		});
	}
};
