
// ========================
// Puerto
// ========================

process.env.PORT = process.env.PORT || '8080';

process.env.DB = process.env.DB || 'postgreSQL';

/**
 * Configuración de conección a la BD common
 */
process.env.DB_USER = 'postgres'
process.env.DB_HOST = 'localhost'
process.env.DB_PASSWORD = '357159js'
process.env.DB_DATABASE = 'common_db'
process.env.DB_PORT = '5432'
