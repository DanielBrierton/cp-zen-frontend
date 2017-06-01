import vueUnitHelper from 'vue-unit-helper';
import SessionList from '!!vue-loader?inject!@/events/cd-event-sessions';

describe('Event list component', () => {
  const sandbox = sinon.sandbox.create();
  const mockService = {
    loadSessions: sandbox.stub(),
  };
  const MockStoreService = {
    load: sinon.stub(),
  };
  const SessionListWithMocks = SessionList({
    './service': mockService,
    '@/store/store-service': MockStoreService,
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should load the selected event', (done) => {
    // ARRANGE
    const vm = vueUnitHelper(SessionListWithMocks);
    vm.eventId = '123';
    const event = { name: 'Foo event' };
    MockStoreService.load.withArgs('selected-event')
      .returns(event);

    // ACT
    vm.loadEvent();

    // ASSERT
    requestAnimationFrame(() => {
      expect(vm.event).to.deep.equal(event);
      expect(MockStoreService.load).to.be.calledOnce;
      done();
    });
  });

  it('should show the list of event sessions', (done) => {
    // ARRANGE
    const mockSessionDataResponse = [
      {
        name: 'Scratch',
        description: 'Beginners welcomes',
      },
      {
        name: 'Arduino',
        description: 'Intermediate',
      },
    ];

    const vm = vueUnitHelper(SessionListWithMocks);
    vm.eventId = '123';
    mockService.loadSessions.withArgs(vm.eventId)
      .returns(Promise.resolve({ body: mockSessionDataResponse }));

    // ACT
    vm.loadSessions();

    // ASSERT
    requestAnimationFrame(() => {
      expect(vm.sessions).to.deep.equal(mockSessionDataResponse);
      done();
    });
  });
});
