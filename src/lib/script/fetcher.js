import moment from 'moment'
import { supabase } from '$lib/script/supabase/client'

const Moment = (/** @type {any} */ date) => {
  return moment(date).locale('id').format('DD MMM YYYY HH:mm')
}

const Page = async () => {
  const { data, error } = await supabase
    .from('messages')
    .select('id', {count: 'exact'})
    .is('deleted', null)
    .is('parent', null)
    .eq('active', true)

    return !error ? data : [{id: 0, message: error.message, date: Moment(new Date())}]
}

const fetch = async (/** @type {number} */ page = 1, /** @type {number} */ parent) => {
  const pageSize  = 5, offset = (page - 1) * pageSize, child = !!parent

  const query = supabase
    .from('messages')
    .select('id, message, owner, created')
    .is('deleted', null)
    .eq('active', true)
    .order('created', { ascending: false })

  child
    ? query.eq('parent', parent)
    : query.is('parent', null).range(offset, offset + pageSize - 1)

  const { data, error } = await query
  return !error ? data : [{id: 0, message: error.message, date: Moment(new Date())}]
}

const send = async (
    /** @type {string} */ message,
    /** @type {number} */ parent
) => {
  const { data, error } = await supabase.from("messages").insert([
    {
      message: message,
      active: false,
      parent: parent || null,
    },
  ]).select()

  return !error ? data : console.log(error)
}

export { send, Moment, Page }
export default fetch