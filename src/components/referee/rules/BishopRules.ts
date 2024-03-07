import { Position, TeamType, samePosition } from "../../../constants";
import { Piece } from "../../../models/Piece";
import {
  isTileEmptyOrOccupiedByEnemy,
  isTileOccupied,
  isTileOccupiedByEnemy,
} from "./GeneralRules";

export const bishopMovement = (
  initialPosition: Position,
  desiredPosition: Position,
  team: TeamType,
  boardState: Piece[]
): boolean => {
  for (let i = 1; i < 8; i++) {
    // Upper Right Movement
    if (
      desiredPosition.x > initialPosition.x &&
      desiredPosition.y > initialPosition.y
    ) {
      const passedPosition: Position = {
        x: initialPosition.x + i,
        y: initialPosition.y + i,
      };

      if (samePosition(passedPosition, desiredPosition)) {
        if (isTileEmptyOrOccupiedByEnemy(passedPosition, boardState, team)) {
          return true;
        }
      } else {
        if (isTileOccupied(passedPosition, boardState)) {
          break;
        }
      }
    }

    // Bottom Right Movement

    if (
      desiredPosition.x > initialPosition.x &&
      desiredPosition.y < initialPosition.y
    ) {
      const passedPosition: Position = {
        x: initialPosition.x + i,
        y: initialPosition.y - i,
      };

      if (samePosition(passedPosition, desiredPosition)) {
        if (isTileEmptyOrOccupiedByEnemy(passedPosition, boardState, team)) {
          return true;
        }
      } else {
        if (isTileOccupied(passedPosition, boardState)) {
          break;
        }
      }
    }

    // Bottom Left Movement

    if (
      desiredPosition.x < initialPosition.x &&
      desiredPosition.y < initialPosition.y
    ) {
      const passedPosition: Position = {
        x: initialPosition.x - i,
        y: initialPosition.y - i,
      };

      if (samePosition(passedPosition, desiredPosition)) {
        if (isTileEmptyOrOccupiedByEnemy(passedPosition, boardState, team)) {
          return true;
        }
      } else {
        if (isTileOccupied(passedPosition, boardState)) {
          break;
        }
      }
    }

    // Upper Left Movement

    if (
      desiredPosition.x < initialPosition.x &&
      desiredPosition.y > initialPosition.y
    ) {
      const passedPosition: Position = {
        x: initialPosition.x - i,
        y: initialPosition.y + i,
      };

      if (samePosition(passedPosition, desiredPosition)) {
        if (isTileEmptyOrOccupiedByEnemy(passedPosition, boardState, team)) {
          return true;
        }
      } else {
        if (isTileOccupied(passedPosition, boardState)) {
          break;
        }
      }
    }
  }

  return false;
};

export const getPossibleBishopMoves = (
  bishop: Piece,
  boardState: Piece[]
): Position[] => {
  const possibleMoves: Position[] = [];

  // Upper Right
  for (let i = 1; i < 8; i++) {
    const destination = { x: bishop.position.x + i, y: bishop.position.y + i };

    if (!isTileOccupied(destination, boardState)) {
      possibleMoves.push(destination);
    } else if (isTileOccupiedByEnemy(destination, boardState, bishop.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Bottom Right
  for (let i = 1; i < 8; i++) {
    const destination = { x: bishop.position.x + i, y: bishop.position.y - i };

    if (!isTileOccupied(destination, boardState)) {
      possibleMoves.push(destination);
    } else if (isTileOccupiedByEnemy(destination, boardState, bishop.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Bottom Left
  for (let i = 1; i < 8; i++) {
    const destination = { x: bishop.position.x - i, y: bishop.position.y - i };

    if (!isTileOccupied(destination, boardState)) {
      possibleMoves.push(destination);
    } else if (isTileOccupiedByEnemy(destination, boardState, bishop.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Upper Left
  for (let i = 1; i < 8; i++) {
    const destination = { x: bishop.position.x - i, y: bishop.position.y + i };

    if (!isTileOccupied(destination, boardState)) {
      possibleMoves.push(destination);
    } else if (isTileOccupiedByEnemy(destination, boardState, bishop.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  return possibleMoves;
};
