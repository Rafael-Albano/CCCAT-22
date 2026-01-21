import { app } from "./app";
import { env } from "./config/env";

const start = async () => {
  console.log('Starting server...');
  try {
    app.log.info('Server is starting...');
    await app.listen({ port: env.PORT });
    app.log.info(`Server is running on port ${env.PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start()