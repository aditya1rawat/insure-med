import { Schema, model, models } from 'mongoose';

const ProcedureCostSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	provider: {
		type: String
	},
	procedure: {
		type: String,
		required: [true, 'Procedure is required.']
	},
	cost: {
		type: Number,
		required: [true, 'Cost is required']
	}
});

const ProcedureCost =
	models.ProcedureCost || model('ProcedureCost', ProcedureCostSchema);

export default ProcedureCost;
