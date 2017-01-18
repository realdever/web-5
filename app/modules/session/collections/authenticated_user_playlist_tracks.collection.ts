import {Injectable} from '@angular/core';
import {Track} from '../../tracks/models/track.model';
import {Tracks} from '../../tracks/collections/tracks.collection';
import {AuthenticatedUserPlaylistTrack} from '../models/authenticated_user_playlist_track.model';

@Injectable()
export class AuthenticatedUserPlaylistTracks<TModel extends Track> extends Tracks<TModel> {
  model: any = AuthenticatedUserPlaylistTrack;
}
