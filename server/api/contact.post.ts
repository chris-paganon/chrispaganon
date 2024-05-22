export default eventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);

  const name = body.name;
  if (!name || name.length === 0 || typeof name !== 'string') {
    throw createError({
      statusCode: 400,
      message: 'Name is required',
    });
  }

  const email = body.email;
  if (!email || email.length === 0 || typeof email !== 'string') {
    throw createError({
      statusCode: 400,
      message: 'Email is required',
    });
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    throw createError({
      statusCode: 400,
      message: 'Email is invalid',
    });
  }

  const description = body.description;
  if (
    !description ||
    description.length === 0 ||
    typeof description !== 'string'
  ) {
    throw createError({
      statusCode: 400,
      message: 'Description is required',
    });
  }

  return 'Hello, World!';
});
