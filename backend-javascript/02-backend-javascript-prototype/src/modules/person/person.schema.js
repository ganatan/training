// import { z } from 'zod'

// const schema = z.object({
//   name: z.string().min(2, 'Name must be a string of at least 2 characters'),
//   city: z.string().min(2, 'City must be a string of at least 2 characters')
// })

// function validatePerson(data) {
//   try {
//     console.log('00000000001:' + JSON.stringify(data));
//     schema.parse(data)
//   } catch (error) {
//     console.log('00000000002:' + JSON.stringify(error));
//     if (error.errors?.length > 0) {
//       const e = new Error(error.errors[0].message)
//       e.status = 400
//       throw e
//     }
//     throw error
//   }
// }

// export { validatePerson }


import { z } from 'zod'

const schema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string'
  }).min(2, 'Name must be a string of at least 2 characters'),

  city: z.string({
    required_error: 'City is required',
    invalid_type_error: 'City must be a string'
  }).min(2, 'City must be a string of at least 2 characters')
})

function validatePerson(data) {
  try {
    schema.parse(data)
  } catch (error) {
    if (error.errors?.length > 0) {
      const e = new Error(error.errors[0].message)
      e.status = 400
      throw e
    }
    throw error
  }
}

export { validatePerson }
