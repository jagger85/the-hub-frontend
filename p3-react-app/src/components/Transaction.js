export class Transaction {
/**
 * 
 *  
 */
  constructor(transaction) {
    let actions = [];
    transaction.lifecycle.execution_trace.action_traces.map((e) => {
      switch (e.act.name) {
        case "resell":
          actions.push({
            type: e.act.name,
            token_id: e.act.data.resell.token_id,
            seller: e.act.data.resell.seller,
            promoter_basis_point:e.act.data.resell.promoter_basis_point ,
            total_price: e.act.data.resell.price,
          });
          break;

        case "cancelresell":
          actions.push({
            type: e.act.name,
            token_id: e.act.data.cancelresell.token_id,
          });
          break;

        case "buy":
          actions.push({
            type: e.act.name,
            token_id: e.act.data.buy.token_id,
            buyer: e.act.data.buy.buyer,
            receiver: e.act.data.buy.receiver,
            seller: "",
            total_price: e.act.data.buy.max_price,
            promoter_id: e.act.data.buy.promoter_id,
          });
          break;

        case "transfer":
          actions.push({
            type: e.act.name,
            from : e.act.data.from,
            to: e.act.data.to,
            quantity: e.act.data.quantity
          });
          break;

        default:
          actions.push({
                type: e.act.name
          });
      }
    });
  }
}
