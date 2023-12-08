import { configureStore } from '@reduxjs/toolkit';

/* playerReducer: 음악 플레이어 상태를 관리하는 Redux Slice의 리듀서 */
import playerReducer from './features/playerSlice';

/* shazamCoreApi: Shazam API와 상호 작용하는 Redux Toolkit Query API 클라이언트 */
import { shazamCoreApi } from './services/shazamCore';

/* Redux 스토어 생성 */
export const store = configureStore({
  /* 각 Slice의 리듀서를 정의 */
  reducer: {
    /* Shzam API 클라이언트의 리듀서 */
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    /* 음악 플레이어 관련 리듀서 */
    player: playerReducer,
  },
  /* 미들웨어 설정: 기본 미들웨어 Shazam API 클라이언트의 미들웨어를 추가. */
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
