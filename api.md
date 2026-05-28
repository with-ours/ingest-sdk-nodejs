# Batch

Types:

- <code><a href="./src/resources/batch.ts">BatchCreateResponse</a></code>

Methods:

- <code title="post /batch">client.batch.<a href="./src/resources/batch.ts">create</a>({ ...params }) -> BatchCreateResponse</code>

# Track

Types:

- <code><a href="./src/resources/track.ts">TrackEventResponse</a></code>

Methods:

- <code title="post /track">client.track.<a href="./src/resources/track.ts">event</a>({ ...params }) -> TrackEventResponse</code>

# Visitor

Types:

- <code><a href="./src/resources/visitor.ts">VisitorUpsertResponse</a></code>

Methods:

- <code title="post /identify">client.visitor.<a href="./src/resources/visitor.ts">upsert</a>({ ...params }) -> VisitorUpsertResponse</code>

# Experiments

Types:

- <code><a href="./src/resources/experiments.ts">ExperimentAssignmentResponse</a></code>
- <code><a href="./src/resources/experiments.ts">ExperimentPersonalizationResponse</a></code>

Methods:

- <code title="post /experiments/assignments/{experiment_key}">client.experiments.<a href="./src/resources/experiments.ts">assignment</a>(experimentKey, { ...params }) -> ExperimentAssignmentResponse</code>
- <code title="post /experiments/personalization">client.experiments.<a href="./src/resources/experiments.ts">personalization</a>({ ...params }) -> ExperimentPersonalizationResponse</code>
