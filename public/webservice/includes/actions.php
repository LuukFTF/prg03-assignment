<?php
/**
 * @return array
 */
function getProjects()
{
    return [
        [
            "id" => 1,
            "title" => "De Kuip Videoclip",
            "type" => "Video Production",
            "client" => "Re-flax"
        ],
        [
            "id" => 2,
            "title" => "Winterconcert",
            "type" => "Video Production",
            "client" => "Zinge"
        ],
        [
            "id" => 3,
            "title" => "Knowledgebase",
            "type" => "Knowledgebase",
            "client" => "Lucas"
        ],
        [
            "id" => 4,
            "title" => "When Love Takes Over Show",
            "type" => "Video Production",
            "client" => "Re-flax"
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getProjectDetails($id)
{
    $tags = [
        1 => [
            "date_start" => "2021-09-25",
            "date_end" => "2021-09-25",
            "description" => "Lorem ipsum dolor sit amet, consectetur adip"
        ],
        2 => [
            "date_start" => "2021-12-11",
            "date_end" => "2021-12-12",
            "description" => "Lorem ipsum dolor sit amet, consectetur adip"
        ],
        3 => [
            "date_start" => "2021-01-01",
            "date_end" => "current",
            "description" => "Lorem ipsum dolor sit amet, consectetur adip"
        ],
        4 => [
            "date_start" => "2021-11-11",
            "date_end" => "2021-11-11",
            "description" => "Lorem ipsum dolor sit amet, consectetur adip"
        ],
    ];

    return $tags[$id];
}
