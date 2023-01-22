use bevy::prelude::Resource;
use core_api::DialogueMap;
use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize, Serialize, Resource, Clone)]
pub struct DialogueContents {
    pub rat: DialogueMap,
}
