import { supabase } from "./supabase"

export async function getCustomers() {

    const { data, error } = await supabase
        .from('customers')
        .select('*')

    if (error) {
        console.error(error);
        throw new Error("Customers could not be loaded")
    }
    return data;
}