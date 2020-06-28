module.exports = {
  user: {
    user: {
      getCandidates: [{
        title: 'Filter',
        type: ['object', 'null']
      }],
      initiateRelation: [{
        title: 'Target Name',
        type: 'string'
      }],
      blockRelation: [{
        title: 'Target Name',
        type: 'string'
      }],
      getInitiators: true,
      acceptRelation: [{
        title: 'Initiator name',
        type: 'string'
      }],
      dropRelation: [{
        title: 'Target Name',
        type: 'string'
      }],
      getMatches: true
    }
  }
}
