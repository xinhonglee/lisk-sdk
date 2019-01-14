/*
 * Copyright © 2018 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 */

'use strict';

const Storage = require('./storage');
const {
	Account,
	Block,
	Delegate,
	Peer,
	Round,
	Transaction,
	Migration,
} = require('./entities');

module.exports = function createStorage(options, logger) {
	const storage = new Storage(options, logger);

	storage.register('Account', Account);
	storage.register('Block', Block);
	storage.register('Delegate', Delegate);
	storage.register('Migration', Migration);
	storage.register('Peer', Peer);
	storage.register('Round', Round);
	storage.register('Transaction', Transaction);

	return storage;
};
