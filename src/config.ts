const variants = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const config = {
  database: {
    host: variants.host,
    port: Number(variants.port),
    name: variants.name,
    user: variants.user,
    password: variants.password,
  },

  rabbitmq: {
    host: process.env.RABBITMQ_HOST,
    port: process.env.RABBITMQ_PORT,
  },
};

export default config;
