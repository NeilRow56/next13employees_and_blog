import prisma from ".";

// Exclude keys from user
function exclude(user, keys) {
  for (let key of keys) {
    delete user[key];
  }
  return user;
}

export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return { users };
  } catch (error) {
    return { error };
  }
}

export async function createUser(user) {
  const { name, email, password, imageUrl } = user;
  try {
    // Confirm data
    // if (!name || !email || !password) {
    //   return {error}

    const userFromDB = await prisma.user.create({
      data: {
        name,
        email,
        password,
        imageUrl,
      },
    });
    {
      user: userFromDB;
    }
    const userWithoutPassword = exclude(user, ["password"]);
    return { user: userWithoutPassword };
  } catch (error) {
    return { error };
  }
}

export async function getUserById(id) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: { tweets: true },
    });
    return { user };
  } catch (error) {
    return { error };
  }
}
