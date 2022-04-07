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
            "type" => "Camera Operator",
            "client" => "Re-flax",
            "img" => "reflax-dekuip.jpg"
        ],
        [
            "id" => 2,
            "title" => "Bartcoin",
            "type" => "Frontend Development",
            "client" => "Bartcoin",
            "img" => "project-example.png"
        ],
        [
            "id" => 3,
            "title" => "Winterconcert",
            "type" => "Live Video Production",
            "client" => "Zinge",
            "img" => "reflax-dekuip.jpg"
        ],
        [
            "id" => 4,
            "title" => "Knowledgebase",
            "type" => "Knowledgebase",
            "client" => "Lucas",
            "img" => "project-example.png"
        ],
        [
            "id" => 5,
            "title" => "When Love Takes Over Show",
            "type" => "Live Video Production",
            "client" => "Re-flax",
            "img" => "reflax-dekuip.jpg"
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
            "title" => "De Kuip Videoclip",
            "type" => "Camera Operator",
            "client" => "Re-flax",
            "img" => "reflax-dekuip.jpg",
            "location" => "Rotterdam, De Kuip",
            "date_start" => "2021-09-25",
            "date_end" => "2021-09-25",
            "description" => "Lorem ipsum dolor sit amet, consectetur adip"
        ],
        2 => [
            "title" => "Bartcoin",
            "type" => "Frontend Development",
            "client" => "Bartcoin",
            "img" => "project-example.png",
            "location" => "",
            "date_start" => "2021-09-25",
            "date_end" => "2021-09-25",
            "description" => "Lorem ipsum dolor sit amet, consectetur adip"

        ]
        3 => [
            "title" => "Winterconcert",
            "type" => "Live Video Production",
            "client" => "Zinge",
            "img" => "reflax-dekuip.jpg",
            "location" => "Hendrik-Ido-Ambacht, Cascade",
            "date_start" => "2021-12-11",
            "date_end" => "2021-12-12",
            "description" => "Lorem ipsum dolor sit amet, consectetur adip"
        ],
        4 => [
            "title" => "Knowledgebase",
            "type" => "Knowledgebase",
            "client" => "Lucas",
            "img" => "project-example.png",
            "location" => "",
            "date_start" => "2021-01-01",
            "date_end" => "current",
            "description" => "Lorem ipsum dolor sit amet, consectetur adip"
        ],
        5 => [
            "title" => "When Love Takes Over Show",
            "type" => "Live Video Production",
            "client" => "Re-flax",
            "location" => "Hendrik-Ido-Ambacht, Cascade",
            "img" => "reflax-dekuip.jpg",
            "date_start" => "2021-11-11",
            "date_end" => "2021-11-11",
            "description" => "Lorem ipsum dolor sit amet, consectetur adip"
        ]
    ];

    return $tags[$id];
}
