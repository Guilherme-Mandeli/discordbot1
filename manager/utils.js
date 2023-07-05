const channelCache = new Map();

/**
 * Obtém um canal do cache ou consulta a API se não estiver em cache.
 * @param {Guild} guild - O guild em que o canal está localizado.
 * @param {string} channelId - O ID do canal a ser obtido.
 * @returns {Promise<Channel>} - Uma Promise que resolve para o canal obtido.
 */
async function getChannel(guild, channelId) {
  // Verifica se o canal está no cache
  let channel = channelCache.get(channelId);

  // Se o canal não está no cache, consulta a API para obtê-lo
  if (!channel) {
    channel = await guild.channels.fetch(channelId);
    channelCache.set(channelId, channel);
  }

  return channel;
}

/**
 * Cria uma Promise que é resolvida após um atraso de 5000 milissegundos (5 segundos).
 * @returns {Promise<void>} - Uma Promise que é resolvida após o atraso.
 */
function delay() {
  return new Promise((resolve) => setTimeout(resolve, 5000));
}

module.exports = {
  getChannel,
  delay,
  channelCache,
};
