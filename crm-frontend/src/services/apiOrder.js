import { supabase } from "./supabase";

export async function getOrders() {

    const { data, error } = await supabase
        .from('orders')
        .select('*')

    if (error) {
        console.log(error);
        throw new Error("Order culd not be loaded ")
    }

    return data;


}