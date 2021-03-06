function createLib (execlib) {
  return execlib.lib.extend({
    service: {
      user: {
        fetchProfile: [{
          title: 'User Name',
          type: 'string'
        }],
        getCandidates: [{
          title: 'User Name',
          type: 'string'
        },{
          title: 'Filter1',
          type: ['array', 'null']
        },{
          title: 'Filter2',
          type: ['array', 'null']
        }],
        initiateRelation: [{
          title: 'Initiator Name',
          type: 'string'
        },{
          title: 'Target Name',
          type: 'string'
        },{
          title: 'Reference',
          type: 'string'
        }],
        blockRelation: [{
          title: 'Initiator Name',
          type: 'string'
        },{
          title: 'Target Name',
          type: 'string'
        }],
        getInitiators: [{
          title: 'User Name',
          type: 'string'
        }],
        acceptRelation: [{
          title: 'Target name',
          type: 'string'
        },{
          title: 'Initiator name',
          type: 'string'
        },{
          title: 'Reference',
          type: 'string'
        }],
        rejectRelation: [{
          title: 'Target name',
          type: 'string'
        },{
          title: 'Initiator name',
          type: 'string'
        }],
        dropRelation: [{
          title: 'Initiator Name',
          type: 'string'
        },{
          title: 'Target Name',
          type: 'string'
        }],
        getMatches: [{
          title: 'User Name',
          type: 'string'
        }]
      }
    }
  }, require('./webindex.js'));
}
module.exports = createLib;
