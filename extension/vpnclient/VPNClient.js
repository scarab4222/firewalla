/*    Copyright 2016 Firewalla LLC 
 *
 *    This program is free software: you can redistribute it and/or  modify
 *    it under the terms of the GNU Affero General Public License, version 3,
 *    as published by the Free Software Foundation.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU Affero General Public License for more details.
 *
 *    You should have received a copy of the GNU Affero General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

const events = require('events');

class VPNClient extends events.EventEmitter {
  constructor(options) {
    super();
  }

  async setup() {
  }

  async start() {
  }

  async stop() {
  }

  async status() {

  }

  async getStatistics() {

  }

  // applicable to pointtopoint interfaces
  async getRemoteIP() {
  }

  async getInterfaceName() {
  }
}

module.exports = VPNClient;