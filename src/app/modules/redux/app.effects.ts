// import { AuthEffects } from './effects/auth.effect';
// import { KeycloakAuthEffects } from './effects/keycloak-auth.effect';

import { loginEffects } from "./effects/login.effect";

export const AppEffects: any = [
    // AuthEffects,
    // KeycloakAuthEffects
    loginEffects
];
